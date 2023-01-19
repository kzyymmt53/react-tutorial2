import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:TaroTokyo20110213-TokyoTower-01min.jpg"
      title="First Meet"
      address="some city"
      description="This is first meetup"
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:TaroTokyo20110213-TokyoTower-01min.jpg",
        id: meetupId,
        title: "First Meet",
        address: "some city",
        description: "This is first meetup",
      },
    },
  };
}

export default MeetupDetails;
