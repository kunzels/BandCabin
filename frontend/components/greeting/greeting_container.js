import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { fetchUser } from '../../actions/user_actions';

const msp = ({session, entities: { users }}) => {
    return {
        currentUser: users[session.id]
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(msp, mdp)(Greeting);