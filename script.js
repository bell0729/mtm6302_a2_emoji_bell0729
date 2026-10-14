const $bodyTag = document.querySelector("body")
const $newSection = document.createElement("section")
$bodyTag.appendChild($newSection)
$newSection.insertAdjacentHTML("beforeend", `<ul id="emoji-list"></ul>`)
const $emojiCodes = [127913, 127808, 127809, 127922, 127918, 127921, 128293, 128081, 128570, 128572, 128571, 128568]
const $emojiUl = document.getElementById("emoji-list")

function showEmojis(count = $emojiCodes.length){
    $emojiUl.innerHTML = ""
    if(count > 12){
        count = 12
    }
    if(count < 0){
        count = 0
    }
    for($item = 0; $item < count; $item++){
        $emojiUl.insertAdjacentHTML("beforeend", `<div class="card">&#${$emojiCodes.at($item)} ${$emojiCodes.at($item)}</div>`)
    }
}
showEmojis()