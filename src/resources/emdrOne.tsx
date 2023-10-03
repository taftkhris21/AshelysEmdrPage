import React from "react"

export const EmdrOne = (): JSX.Element => {
    return (
        <div className="textContainer">
            <p className="baseText">
                <b>Targeted Incident:</b> We have decided to work on ______. Does that still fit or is there a better one?<br/>
                <b>Worst Part:</b> Tell me the worst part of the incident.<br/>
                <b>Negative Belief:</b> We have decided your negative belief was ____. Does that still fit or is there a better one?<br/>
                <b>Positive Belief:</b> We have decided a more adaptive belief was ____. Does that still fit or is there a better one?<br/>
                <b>VOC:</b> When you think of the incident, how true do the words (positive belief) feel to you now on a scale from 1 to 7?<br/>
                <b>Emotions:</b> When you think of the incident and (negative belief), what emotions are you feeling now?<br/>
                <b>SUD:</b> On a scale from 0 to 10, how disturbing is it now?<br/>
                <b>Begin Processing:</b> I’d like you to focus on the incident, the negative belief ____, and where you feel it in your body and follow my tapping.</p>

            <ol type="1" className="baseText">
                <li>Start BLDAS: 5-10 seconds</li>
                <li>Stop and take a SUD: Take a breath. When you think of the incient, how disturbing is it now 0-10? Go with that</li>
                <li>Repeat 1 and 2 for a total of 3 times</li>
                <li>After the third set: Take a breath… When you think of the incident, what is different/changed about it now? How disturbing is it now? 0-10? Go with that</li>
                <li>Repeat 3-1 ratio until the SUD stops decreasing then proceed to installation</li>
            </ol>

            <p>Installation</p>
            <ol type="1" className="baseText">
                <li>As you think of the incident, does the original positive belief still fit or is there a better one?</li>
                <li>When you think of the incident and your positive belief, how true does it feel now, 1-7? Go with that: 5-10 processing</li>
                <li>Take a breath, now when you think of the incident and your positive belief, how true does it feel? 1-7?</li>
                <li>Proceed to closure if</li>
                <ol type="a">
                    <li>Client reports a 7</li>
                    <li>VOC makes sense under circumstances</li>
                </ol>
            </ol>
            <p>Closure</p>
            <ol type="1" className="baseText">
                <li>Debrief</li>
                <li>Close</li>
            </ol>
        </div>
    )
}
