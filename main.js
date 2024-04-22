const businessname_generator_finalresult_container = document.querySelector(".businessname-generator-finalresult-container");
const generate_businessname_btn = document.getElementById("generate-businessname-btn");

const delay_loading = (time_for_loader) => {
    return new Promise((resolve, reject)=> {
        setTimeout(resolve, time_for_loader);
    })
    // =================== async await doesn't work by default with settimeout & setintervals that's why we've to use promise with it to execute the settimeout & setinterval asynchronously ===================
}
const first_words_arr = ["armory", "steel", "guardian", "fortified", "battle", "defenders'","warrior"];
const second_words_arr = ["alliance", "sentinel arms", "gear guns", "firearms", "born arms", "depot", "weaponary"];

generate_businessname_btn.addEventListener("click", async ()=>{
    businessname_generator_finalresult_container.innerHTML = `<img src="static/loader.svg" alt="loading" class="generating-businessname-loader">`;
    await delay_loading(1000);
    businessname_generator_finalresult_container.innerHTML = "";
    const h3_tag = document.createElement("h3");
    h3_tag.id = "generated-businessname";
    const iterate_firstword = first_words_arr[Math.floor(Math.random() * first_words_arr.length)];
    const iterate_secondword = second_words_arr[Math.floor(Math.random() * second_words_arr.length)];
    h3_tag.innerHTML = `${iterate_firstword} ${iterate_secondword}`;
    businessname_generator_finalresult_container.appendChild(h3_tag);
})
