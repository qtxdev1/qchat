import EmptyState from '../components/EmptyState';

type Props = {}

const Users: React.FC<Props> = props => {

  return (
    <div 
      className='hidden lg:block lg:pl-80 h-full'
      // className='lg:block lg:pl-80 h-full'
    >
      <EmptyState />
    </div>
  );
};

export default Users;