import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:TaroTokyo20110213-TokyoTower-01min.jpg",
    address: "some address 12345 some city",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:TaroTokyo20110213-TokyoTower-01min.jpg",
    address: "some address 12345 some city",
    description: "This is second meetup",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/*export async function getStaticProps() {
    //fetch data from an Api
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10,
    };
}*/

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: { DUMMY_MEETUPS },
  };
}
export default HomePage;
