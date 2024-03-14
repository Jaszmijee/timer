import styles from './Timer.module.scss';

const Timer = ({ elapsedTime }) => {
    const formatTime = (milliseconds) => {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
        const miliseconds = Math.floor((milliseconds % 1000) / 10);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${miliseconds.toString().padStart(3, '0')}`;
    };

    return (
        <div>
            <div className={styles.time}>{formatTime(elapsedTime)}</div>
        </div>
    );
};

    export default Timer;