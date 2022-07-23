import styles from './statistics.module.css';
import getRandomHexColors from 'utils/getRandomHexColors';
import PropTypes from 'prop-types';

export default function Statistics({title, stats}) {
    return (
        <section className={styles.statistics}>
           {title && <h2 className={styles.title}>Upload stats</h2>}

            <ul className={styles.statList}>
                {stats.map(({id, label, percentage}) => (
                    <li
                        key={id}
                        className={styles.item}
                        style={{ backgroundColor : getRandomHexColors() }}
                    >
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes ={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
}