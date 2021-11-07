import styles from './shimmer.module.css';

const Shimmer = (props) => {
    const { children } = props;

    return <div className={styles.shimmer}>{children}</div>;
};

export default Shimmer;
