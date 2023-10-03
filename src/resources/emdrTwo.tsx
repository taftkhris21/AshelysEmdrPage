import React from 'react'

export const EmdrTwo = (): JSX.Element => {
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
            <b>Body Location:</b> Where do you feel it in your body?<br/>
            <b>Begin Processing:</b> I'd like you to focus on the incident, the negative belief ____, and where you feel it in your body and follow my tapping.</p>

        <ol type="1" className="baseText">
            <li>Start BLDAS: 5-10 seconds</li>
            <li>Take a breath. Let it go. When you think of the incident, what do you notice now? Go with that.</li>
            <li>Repeat 1&2 as long as the client reports change.</li>
            <li>When a client no longer reports change, take a SUD: Take a breath, now when you think of the incident, how disturbing is it, 0-10 where 0 represents no disturbance and 10 the highest disturbance you can imagine.</li>
            <li>SUD 0: Ask if the SUD can decrease anymore or if the disturbance remaining is related to the memories that are off limits.</li>
            <ol type="a">
                <li>If the client reports SUD may lower, return to processing until SUD no longer decreases, then move to Installation.</li>
                <li>If the client reports the SUD is related to memories that are off limits or cannot go lower, proceed to Installation</li>
            </ol>
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

        <p>Body Scan</p>
        <ol type="1" className='baseText'>
            <li>Think of the incident and your positive belief, scan your body, report any sensations you are experiencing.</li>
                <ol type='a'>
                    <li>Confirm the body sensation is related to the target.</li>
                    <li>If related to another incident, skip the body scan and proceed to future template.</li>
                </ol>
            <li>Apply BLDAS: 5-10 seconds</li>
            <li>Repeat 1 and 2 until body scan is calm/neutral. Once neutral, add one more set of 5-10 seconds.</li>
            <li>If another incident emerges, put into their container and proceed to closure.</li>
        </ol>
        <p>Closure</p>
        <ol type="1" className="baseText">
            <li>Stabilize as needed (breathing/inner peaceful place/container)</li>
            <li>Debrief (experience, insights)</li>
            <li>Close (Remind client that processing will continue after the session)</li>
        </ol>
    </div>
)
}