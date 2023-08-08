import React from "react";
import s from "./Story.module.css";

export default function Story() {
    return (
        <div className={s.story_container}>
            <p>
                Приехав к нам однажды, многие наши клиенты становятся
                постоянными, а часть из них даже друзьями.
            </p>

            <p>
                А также в нашей мастерской можно отремонтировать электросамокат
                и электровелосипед.
            </p>
        </div>
    );
}
