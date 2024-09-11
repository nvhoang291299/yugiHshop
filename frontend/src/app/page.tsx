// import Image from 'next/image';
import Section from '@/components/Section';
import TopCreators from '@/components/TopCreators';
import Wrapper from '@/components/Wrapper';
import { Container } from '@mui/material';
import styles from './page.module.css';
// import SlideSection from '@/components/slideSection';
// import SlideItem from '@/components/slideItem';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container maxWidth="lg">
          <Wrapper />
          <Section />
          <TopCreators />
        </Container>
      </div>
    </main>
  )
}
