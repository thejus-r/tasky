"use client"

import useTestStore from "@/stores/testStore"

export default function TestPage() {

    const addCount = useTestStore(state=> state.addCount)
    return <div>
        <h1>Test Page</h1>
        <button onClick={addCount}>Add Count</button>
        <CountWrapper/>
    </div>
}

function CountWrapper() {
    const count = useTestStore(state=> state.count)
    return <>
    <p className="text-4xl">Count Value: {count} </p>
    </>
}