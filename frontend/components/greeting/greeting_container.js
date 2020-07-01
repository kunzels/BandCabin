import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { fetchUser } from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';

const msp = ({session, entities: { users }}) => {
    return {
        currentUser: users[session.id]
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(msp, mdp)(Greeting));