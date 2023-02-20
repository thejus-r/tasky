import { redirect } from 'next/navigation';

export default function TaskPage() {
    redirect(`tasks/${new Date().toISOString().slice(0,10)}`)
}