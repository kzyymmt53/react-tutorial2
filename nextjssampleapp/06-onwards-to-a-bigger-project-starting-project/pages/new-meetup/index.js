import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch("/api/new-meetup");

        router.push("/");

    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;