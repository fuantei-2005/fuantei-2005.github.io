
import emptyimage from "./assets/empty.png"
import q2image from "./assets/q2image.png"
import q7image from "./assets/q7image.jpeg"
import q9image from "./assets/q9image.jpg"
import q12image from "./assets/q12image.png"
import q16image from "./assets/q16image.png"

export default function Questionaire() {
    const values = [
        {
            title: "q1",
            value: 0
        },
        {
            title: "q2",
            value: 0
        },
        {
            title: "q3",
            value: 0
        },
        {
            title: "q4",
            value: 0
        },
        {
            title: "q5",
            value: 0
        },
        {
            title: "q6",
            value: 0
        },
        {
            title: "q7",
            value: 0
        },
        {
            title: "q8",
            value: 0
        },
        {
            title: "q9",
            value: 0
        },
        {
            title: "q10",
            value: 0
        },
        {
            title: "q11",
            value: 0
        },
        {
            title: "q12",
            value: 0
        },
        {
            title: "q13",
            value: 0
        },
        {
            title: "q14",
            value: 0
        },
        {
            title: "q15",
            value: 0
        },
        {
            title: "q16",
            value: 1
        },
        {
            title: "q17",
            value: 0
        },
        {
            title: "q18",
            value: 0
        }
    ]
    

    let result = 0;

    function handleSubmit(e) {
        result = 0;
        e.preventDefault();
        console.log(e)
        for(var i=0; i<18; i++ )
        {
            console.log(values[i].title + "value: " + values[i].value)
            result += values[i].value;
        }
        console.log("Result: " + result)

        if (result > 100)
        {
            alert("Your score: " + result + ", My username: apsonus_")
        }
        else 
        {
            alert("Your score: " + result + ", YOU DON'T GET MY USERNAME!!!")
        }
    } 

    function handleChange(e) {
        console.log(e)
        
        values.find((v) => {
            return v.title === e.target.name
        }).value = parseInt(e.target.value)

        console.log(values.find((v) => {
            return v.title === e.target.name
        }))

    }

    return (
        <>
        <div className="w-screen h-screen flex justify-center">
            <div className="flex flex-col">
                <div className="p-4 rounded-sm bg-stone-900 my-4">
                    <i><p className="p-2 text-center text-stone-300 rounded-sm bg-stone-900">Your answers will not be saved.</p></i>
                    <hr className="my-4"></hr>
                    <p>Answers can get you <span className="text-green-400">positive</span> or <span className="text-red-400">negative</span> <span className="text-yellow-200">points</span>. You will get <span className="text-yellow-200">points</span> depending on those answers,</p>
                    <p>They will then be counted and depending on the result, you may or may not get my username.</p>
                    <hr className="my-4"></hr>
                    <i><p className="text-center text-xl p-2">Best of luck, chum!</p></i>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 1.</p>
                        <p className="text-xl text-stone-300 p-2">What do you think of CookieRun:Kingdom?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-[url(https://www.cookierun-kingdom.com/og-en.jpg)] bg-center blur-xs w-full h-40 [grid-area:stack]"></div>
                            <img src="https://www.cookierun-kingdom.com/og-en.jpg" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://www.cookierun-kingdom.com/og-en.jpg" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q1" id="q1a1" value="20" className="p-2" onChange={handleChange} required/>
                                <label for="q1a1" className="p-2">big fan</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q1" id="q1a2" value="5" className="p-2" onChange={handleChange}/>
                                <label for="q1a2" className="p-2">i don't fucking know what that is</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q1" id="q1a3" value="0" className="p-2" onChange={handleChange}/>
                                <label for="q1a3" className="p-2">mid</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 2.</p>
                        <p className="text-xl text-stone-300 p-2">"do you fw skibidi toilet"?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(./assets/q2image.png)] bg-cover"></div>
                            <img src={q2image} className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src={q2image} className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q2" id="q2a1" value="10" className="p-2" onChange={handleChange} required/>
                                <label for="q2a1" className="p-2">Yes</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q2" id="q2a2" value="0" className="p-2" onChange={handleChange}/>
                                <label for="2a2" className="p-2">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 3.</p>
                        <p className="text-xl text-stone-300 p-2">What do you think of... the gays? Yay or Nay?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVjwWcucjURU7AiWxIaK5KkqLDSH9zgO9gg&s)] bg-cover"></div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVjwWcucjURU7AiWxIaK5KkqLDSH9zgO9gg&s" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVjwWcucjURU7AiWxIaK5KkqLDSH9zgO9gg&s" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q3" id="q3a1" value="10" className="p-2" onChange={handleChange} required/>
                                <label for="q3a1" className="p-2">Yay</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q3" id="q3a2" value="-10" className="p-2" onChange={handleChange}/>
                                <label for="q3a2" className="p-2">Nay</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 4.</p>
                        <p className="text-xl text-stone-300 p-2">Are you yourself a the gay?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVjwWcucjURU7AiWxIaK5KkqLDSH9zgO9gg&s)] bg-cover"></div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVjwWcucjURU7AiWxIaK5KkqLDSH9zgO9gg&s" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVjwWcucjURU7AiWxIaK5KkqLDSH9zgO9gg&s" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q4" id="q4a1" value="10" className="p-2" onChange={handleChange} required/>
                                <label for="q4a1" className="p-2">Yes</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q4" id="q4a2" value="0" className="p-2" onChange={handleChange}/>
                                <label for="q4a2" className="p-2">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 5.</p>
                        <p className="text-xl text-stone-300 p-2">What do you think of the stock market crash of 1929?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://cdn.britannica.com/48/226948-050-39C1943A/Workers-flood-streets-Black-Tuesday-stock-market-crash-Wall-Street-October-29-1929-New-York-City.jpg)] bg-cover"></div>
                            <img src="https://cdn.britannica.com/48/226948-050-39C1943A/Workers-flood-streets-Black-Tuesday-stock-market-crash-Wall-Street-October-29-1929-New-York-City.jpg" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://cdn.britannica.com/48/226948-050-39C1943A/Workers-flood-streets-Black-Tuesday-stock-market-crash-Wall-Street-October-29-1929-New-York-City.jpg" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q5" id="q5a1" value="10" className="p-2" onChange={handleChange} required/>
                                <label for="q5a1" className="p-2">cool I guess</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q5" id="q5a2" value="0" className="p-2" onChange={handleChange}/>
                                <label for="q5a2" className="p-2">uncool</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 6.</p>
                        <p className="text-xl text-stone-300 p-2">Do you consider yourself sane?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://thumbs.dreamstime.com/z/doubt-man-thinking-solution-studio-problem-solving-wondering-fake-news-mockup-space-person-contemplating-385117909.jpg)] bg-cover"></div>
                            <img src="https://thumbs.dreamstime.com/z/doubt-man-thinking-solution-studio-problem-solving-wondering-fake-news-mockup-space-person-contemplating-385117909.jpg" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://thumbs.dreamstime.com/z/doubt-man-thinking-solution-studio-problem-solving-wondering-fake-news-mockup-space-person-contemplating-385117909.jpg" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q6" id="q6a1" value="5" className="p-2" onChange={handleChange} required/>
                                <label for="q6a1" className="p-2">Yes</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q6" id="q6a2" value="15" className="p-2" onChange={handleChange}/>
                                <label for="q6a2" className="p-2">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 7.</p>
                        <p className="text-xl text-stone-300 p-2">do you like this funny deer man</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(./assets/q7image.jpeg)] bg-cover"></div>
                            <img src={q7image} className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src={q7image} className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q7" id="q7a1" value="15" className="p-2" onChange={handleChange} required/>
                                <label for="q7a1" className="p-2">very much</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q7" id="q7a2" value="10" className="p-2" onChange={handleChange}/>
                                <label for="q7a2" className="p-2">yes</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q7" id="q7a3" value="5" className="p-2" onChange={handleChange}/>
                                <label for="q7a3" className="p-2">only a little bit</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 8.</p>
                        <p className="text-xl text-stone-300 p-2">Need For Speed: Most Wanted (2012)</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://upload.wikimedia.org/wikipedia/en/b/b0/Nfs-most-wanted-2012-gen-packart.jpg)] bg-cover"></div>
                            <img src="https://upload.wikimedia.org/wikipedia/en/b/b0/Nfs-most-wanted-2012-gen-packart.jpg" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://upload.wikimedia.org/wikipedia/en/b/b0/Nfs-most-wanted-2012-gen-packart.jpg" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q8" id="q8a1" value="20" className="p-2" onChange={handleChange} required/>
                                <label for="q8a1" className="p-2">✓</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q8" id="q8a2" value="-5" className="p-2" onChange={handleChange}/>
                                <label for="q8a2" className="p-2">✘</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 9.</p>
                        <p className="text-xl text-stone-300 p-2">Do you find this funny? (image of funny)</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(./assets/q9image.jpg)] bg-cover"></div>
                            <img src={q9image} className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src={q9image} className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q9" id="q9a1" value="10" className="p-2" onChange={handleChange} required/>
                                <label for="q9a1" className="p-2">Perhaps</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q9" id="q9a2" value="0" className="p-2" onChange={handleChange}/>
                                <label for="q9a2" className="p-2">Perhaps not</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 10.</p>
                        <p className="text-xl text-stone-300 p-2">Shadow Milk Cookie</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://static.wikia.nocookie.net/cookierunkingdom/images/4/48/Shadow_milk_default.png)] bg-cover"></div>
                            <img src="https://static.wikia.nocookie.net/cookierunkingdom/images/4/48/Shadow_milk_default.png" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://static.wikia.nocookie.net/cookierunkingdom/images/4/48/Shadow_milk_default.png" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q10" id="q10a1" value="15" className="p-2" onChange={handleChange} required/>
                                <label for="q10a1" className="p-2">Yes</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q10" id="q10a2" value="0" className="p-2" onChange={handleChange}/>
                                <label for="q10a2" className="p-2">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 11.</p>
                        <p className="text-xl text-stone-300 p-2">do you think my wife loves me</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(./assets/empty.png)] bg-cover"></div>
                            <img src={emptyimage} className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src={emptyimage} className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q11" id="q11a1" value="10" className="p-2" onChange={handleChange} required/>
                                <label for="q11a1" className="p-2">maybe yeah</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q11" id="q11a2" value="0" className="p-2" onChange={handleChange}/>
                                <label for="q11a2" className="p-2">shit idk probably not</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 12.</p>
                        <p className="text-xl text-stone-300 p-2"></p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(./assets/q12image.png)] bg-cover"></div>
                            <img src={q12image} className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src={q12image} className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q12" id="q12a1" value="0" className="p-2" onChange={handleChange} required/>
                                <label for="q12a1" className="p-2"></label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q12" id="q12a2" value="10" className="p-2" onChange={handleChange}/>
                                <label for="q12a2" className="p-2">Kill yourself</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 13.</p>
                        <p className="text-xl text-stone-300 p-2">will you randomly send me porn in dms unprompted</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://c.tenor.com/hJqQQn8h_DoAAAAd/tenor.gif)] bg-cover"></div>
                            <img src="https://c.tenor.com/hJqQQn8h_DoAAAAd/tenor.gif" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://c.tenor.com/hJqQQn8h_DoAAAAd/tenor.gif" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q13" id="q13a1" value="-50" className="p-2" onChange={handleChange} required/>
                                <label for="q13a1" className="p-2">yes</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q13" id="q13a2" value="10" className="p-2" onChange={handleChange}/>
                                <label for="q13a2" className="p-2">no</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 14.</p>
                        <p className="text-xl text-stone-300 p-2">Susie Deltarune?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://static.wikia.nocookie.net/deltarune/images/c/c0/Susie_overworld_eyes.png)] bg-cover"></div>
                            <img src="https://static.wikia.nocookie.net/deltarune/images/c/c0/Susie_overworld_eyes.png" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://static.wikia.nocookie.net/deltarune/images/c/c0/Susie_overworld_eyes.png" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q14" id="q14a1" value="10" className="p-2" onChange={handleChange} required/>
                                <label for="q14a1" className="p-2">yes</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q14" id="q14a2" value="-10" className="p-2" onChange={handleChange}/>
                                <label for="q14a2" className="p-2">no</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 15.</p>
                        <p className="text-xl text-stone-300 p-2">Pure Vanilla Cookie?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://static.wikia.nocookie.net/cookierunkingdom/images/8/8b/Pure_vanilla_default.png)] bg-cover"></div>
                            <img src="https://static.wikia.nocookie.net/cookierunkingdom/images/8/8b/Pure_vanilla_default.png" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://static.wikia.nocookie.net/cookierunkingdom/images/8/8b/Pure_vanilla_default.png" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q15" id="q15a1" value="10" className="p-2" onChange={handleChange} required/>
                                <label for="q15a1" className="p-2">yeah</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q15" id="q15a2" value="-20" className="p-2" onChange={handleChange}/>
                                <label for="q15a2" className="p-2">???</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 16.</p>
                        <p className="text-xl text-stone-300 p-2">Are you fond of this individual?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(./assets/q16image.png)] bg-cover"></div>
                            <img src={q16image} className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src={q16image} className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q16" id="q16a1" value="0" className="p-2" onChange={handleChange} required/>
                                <label for="q16a1" className="p-2">I'm fond of this individual</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q16" id="q16a2" value="0" className="p-2" onChange={handleChange}/>
                                <label for="q16a2" className="p-2">I'm not fond of this individual</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 17.</p>
                        <p className="text-xl text-stone-300 p-2">Dexter (2006)</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://m.media-amazon.com/images/S/pv-target-images/3d94e946fc6fca4b48368660014c77524998c908298b4b792c2f43469437a9f8.jpg)] bg-cover"></div>
                            <img src="https://m.media-amazon.com/images/S/pv-target-images/3d94e946fc6fca4b48368660014c77524998c908298b4b792c2f43469437a9f8.jpg" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://m.media-amazon.com/images/S/pv-target-images/3d94e946fc6fca4b48368660014c77524998c908298b4b792c2f43469437a9f8.jpg" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q17" id="q17a1" value="20" className="p-2" onChange={handleChange} required/>
                                <label for="q17a1" className="p-2">Dexter (2006)</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q17" id="q17a2" value="0" className="p-2" onChange={handleChange}/>
                                <label for="q17a2" className="p-2">no</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-900 rounded-sm p-2 my-4">
                        <p className="text-3xl text-yellow-200 p-2">Question 18.</p>
                        <p className="text-xl text-stone-300 p-2">Are you french?</p>
                        <div className="grid place-items-center [grid-template-areas:'stack']">
                            <div className="flex justify-center m-2 bg-black rounded-sm bg-center blur-xs w-full h-40 [grid-area:stack] bg-[url(https://www.theflagshop.co.uk/media/catalog/product/f/r/france-flag-std.jpg)] bg-cover"></div>
                            <img src="https://www.theflagshop.co.uk/media/catalog/product/f/r/france-flag-std.jpg" className="h-40 blur-xs [grid-area:stack] z-1"/>
                            <img src="https://www.theflagshop.co.uk/media/catalog/product/f/r/france-flag-std.jpg" className="h-40 blur-none [grid-area:stack] z-2"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <input type="radio" name="q18" id="q18a1" value="-50" className="p-2" onChange={handleChange} required/>
                                <label for="q18a1" className="p-2">Yes</label>
                            </div>
                            <div className="p-2">
                                <input type="radio" name="q18" id="q18a2" value="10" className="p-2" onChange={handleChange}/>
                                <label for="q18a2" className="p-2">No</label>
                            </div>
                        </div>
                    </div>

                    




                    <button className="my-4">submit that shit</button>
                </form>
            </div>
        </div>
        </>
    )
}
