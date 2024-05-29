import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';
import getConversations from '../actions/getConversations';

type Props = {
  children: React.ReactNode;
}

const ConversationLayout: React.FC<Props> = async({ children }) => {
  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className='h-full'>
        <ConversationList
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationLayout;