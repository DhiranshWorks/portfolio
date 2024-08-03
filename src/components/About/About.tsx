import { friends, profiles } from 'src/content'
import { SocialProfile, Friend } from 'src/components'
import styles from './About.module.scss'

const globe = (
  <svg
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={styles.globe}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
  </svg>
)

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h4>About</h4>
        <div className={styles.website}>{globe} dhiransh.space</div>
        <p className={styles.description}>
          Dhiransh is an Indian software engineer, computer scientist and gamer. He currently works as a Software Engineer at Butterfly Learnings and Freelancer. His expertise spans Android and iOS App Development, API development, and Server Management. He occasionally shares his knowledge through educational software engineering videos, focusing on tutorials. In addition to his professional pursuits, Dhiransh is a soccer and badminton player who also enjoys playing video games. Looking ahead, he hopes to own and drive the Mclaren 765LT Spider™.
        </p>
        <div className={styles.stat}>
          <span>Born: </span>September, 2000 (age{' '}
          {new Date(Date.now() - new Date(2000, 8).getTime()).getFullYear() -
            1970}{' '}
          years),{' '}
          <a
            href="https://en.wikipedia.org/wiki/Lucknow"
            target="_blank"
            rel="noreferrer"
          >
            Lucknow, Uttar Pradesh
          </a>
        </div>
        <div className={styles.stat}>
          <span>Height: </span>1.79 m (5 feet 10 and 7/16 inches)*
        </div>
        <div className={styles.stat}>
          <span>Education: </span>
          <a href="https://vit.ac.in/" target="_blank" rel="noreferrer">
            Vellore Institute Of Technology
          </a>{' '}
          (2023)
        </div>
        <div className={styles.stat}>
          <span>Net Worth: </span>₹13.23 INR (July, 2024)
        </div>

        <div className={styles.border} />
      </div>
      <div className={styles.profiles}>
        <h4>Profiles</h4>
        <div className={styles.socials}>
          {profiles.map((profile) => (
            <SocialProfile {...profile} key={profile.label} />
          ))}
        </div>
        <div className={styles.border} />
      </div>
      <div className={styles.people}>
        <h4>People also search for</h4>
        <div className={styles.socials}>
          {friends.map((friend) => (
            <Friend {...friend} key={friend.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
