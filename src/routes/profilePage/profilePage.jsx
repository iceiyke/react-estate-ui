import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h2>User Information</h2>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>Email: john@gmail.com</span>
          </div>
          <div className="title">
            <h2>My List</h2>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h2>Saved List</h2>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
