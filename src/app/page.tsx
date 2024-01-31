import { Button, Title } from "@mantine/core";
import styles from "./page.module.css";

export default function Home() {
  return <div className={styles.home}>
    <Title order={1}>Homepage</Title>
    <Button color="deepBlue">Ocean blue button</Button>
  </div>
}
