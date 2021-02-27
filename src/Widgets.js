import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"776094875787726848"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Modulo_script"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://web.facebook.com/?_rdc=1&_rdr"}
          options={{ text: "#reactjs is awesome", via: "Moduloscript" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
