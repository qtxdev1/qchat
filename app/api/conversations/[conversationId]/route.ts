import getCurrentUser from "@/app/actions/getCurrentUser";;
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";

type IParams = {
  conversationId?: string;
};
export async function DELETE(
  request: Request,
  { params } : { params: IParams  }
) {
  try {
    const { conversationId } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const existConversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    if (!existConversation) {
      return new NextResponse("Invalid ID", { status: 400 });
    }
    
    const deleteConversation = await prisma.conversation.deleteMany({
      where: {
        id: conversationId,
        userIds: {
          hasSome: [currentUser.id],
        },
      },
    });

    existConversation.users.forEach((user) => {
      if (user.email) {
        pusherServer.trigger(user.email, 'conversation:remove', existConversation);
      }
    });

    return NextResponse.json(deleteConversation);
  } catch (error) {
    console.log(error, 'ERROR_CONVERSATION_DELETE');
    return new NextResponse("Internal Error", { status: 500 });
  }
}