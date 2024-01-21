import { addPost } from "../../../lib/actions";

const ActionTest = () => {
  return (
    <div>
      <form action={addPost}>
        <input type='text' placeholder="Title" name='title'/>
        <input type='text' placeholder="Description" name='desc'/>
        <input type='text' placeholder="Slug" name='slug'/>
        <input type='text' placeholder="User ID" name='userId'/>
        <button>Create</button>
      </form>
    </div>
  )
};

export default ActionTest;
