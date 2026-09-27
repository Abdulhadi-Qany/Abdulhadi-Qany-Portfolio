import React from 'react'

import { useSiteData } from '@/utils'

import styles from './styles.module.sass'

export const Contact: React.FC = () => {
    const data = useSiteData()

    return (
        <section className={styles.contactSection}>
            <h2 className={'pageTitle'}>{'Get In Touch'}</h2>

            {data?.biography?.availableForWork && (
                <div className={styles.availableBadge}>
                    <span
                        className={styles.dot}
                        aria-hidden={'true'}
                    />
                    {'Open to new opportunities'}
                </div>
            )}

            <p className={styles.contactIntro}>
                {"I'm always open to discussing new projects, creative ideas, or opportunities to build something great."}
            </p>
        </section>
    )
}
