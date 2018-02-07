import route from './router.js'
import Home from '/imports/ui/Home.jsx';
import Register from '/imports/ui/pages/user/Register.jsx';
import Login from '/imports/ui/pages/user/Login.jsx';
import PostCreate from '/imports/ui/pages/post/PostCreate.jsx';
import PostList from '/imports/ui/pages/post/PostList.jsx';
import PostEdit from '/imports/ui/pages/post/PostEdit.jsx';
import CommentView from '/imports/ui/pages/comment/CommentView.jsx';

route('/', Home, {}, {
  name: 'home'
});
route('/login', Login, {}, {
  name: 'login'
});
route('/register', Register, {}, {
  name: 'register'
});
route('/post/create', PostCreate, {}, {
  name: 'post.create'
});
route('/post/list', PostList, {}, {
  name: 'post.list'
});
route('/post/edit/:_id', PostEdit, {}, {
  name:'post.edit'
});
route('/comments/:postId', CommentView, {}, {
  name:'comments'
});