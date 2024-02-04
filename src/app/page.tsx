import { Button, Title } from "@mantine/core";
import styles from "./page.module.css";

export default function Home() {
  return <div className={styles.home}>
    <Title order={1}>Homepage</Title>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <Button color="deepBlue">READ MORE</Button>
  </div>
}
