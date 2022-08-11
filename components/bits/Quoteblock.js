import React from 'react'

/** Styled box
 * @params body: string
 */
export default function Quoteblock(props) {
  return (
    <div class="max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow">
        <div class="mb-2">
            <div class="h-3 text-3xl text-left text-gray-600">“</div>
            <p class="px-4 text-sm text-center text-gray-600">
                {props.body}
            </p>
            <div class="h-3 text-3xl text-right text-gray-600">”</div>
        </div>
    </div>
  )
}
