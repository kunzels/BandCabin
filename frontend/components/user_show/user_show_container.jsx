import {connect} from 'react-redux';
import {fetchUser, updateUser} from '../../actions/user_actions';
import UserShow from './user_show';

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    }
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: user => dispatch(updateUser(user))
});

export default connect(msp, mdp)(UserShow);