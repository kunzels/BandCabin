import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import UserShow from './user_show';

// const msp = (state, ownProps) => {
//     // const user = state.entities.users[ownProps.match.params.userId];
//     return{
//         user,
//         currentUser: state.session.currentUser
//     };
// };

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(null, mdp)(UserShow);