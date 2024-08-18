import styles from '../styles/components/Pagination.module.scss';

const Pagination: React.FC<{ maxPage: number, currentPage: number, jump: (page: number) => void }> = ({ maxPage, currentPage, jump }) => {
    const pages = [...Array(maxPage)].map((_, i) => i + 1)
    return (
        <div className={styles.pagination_container}>{
            pages.map(page => (
                <p key={page} className={page === currentPage ? styles.current_page : 'default'} onClick={() => jump(page)}>
                    {page}
                </p>
            ))

        }
        </div>
    )
}

export default Pagination