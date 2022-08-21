import React from 'react'

export default function Toggle(props) {
    return (
        <>
            <button onClick={props.onToggle}>{props.icon}</button>
            <div class={`${props.className}`}>
                <div class="relative inline-block w-10 mr-2 align-middle select-none">
                    <input onClick={props.onToggle} type="checkbox" name="toggle" id="Gray" class="checked:bg-gray-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                    <label for="Gray" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
            </div>
        </>
    )
}
