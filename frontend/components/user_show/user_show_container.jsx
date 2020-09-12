import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import UserShow from './user_show';

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    }
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(msp, mdp)(UserShow);