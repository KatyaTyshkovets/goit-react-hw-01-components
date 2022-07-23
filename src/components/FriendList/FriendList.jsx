import styles from './friendList.module.css';
import PropTypes from 'prop-types';


export default function FriendList({friends}) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <li className={styles.item} key={friend.id}>
                    <span className={friend.isOnline ? styles.true : styles.false}></span>
                    <img
                        className={styles.avatar}
                        src={friend.avatar}
                        alt="User avatar"
                        width="60"
                    />
                    <p className={styles.name}>{friend.name} </p>
                </li>
            ))}
        </ul>
    );
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
}