<aura:application>
    <!--<link rel="stylesheet" href="/css/bootstrap-3.3.6-dist/css/bootstrap.css"/>-->
    <div aura:id="homepage">

        <routing:SimpleRoutedPath route="home|^$" component="twitter:home" />
        <routing:SimpleRoutedPath route="profile" component="twitter:profile" />

        <a href="{!'homepage.app#profile?userid='+4}" >go to profile</a>

        <div class="page">
            <twitter:navBar/>
            <div class="container">
                <div class="spacer"></div>
                <twitter:profile_info />
                <div class="tweet">
                    <twitter:sendTweet />
                    <twitter:recieveTweet />
                </div>
                <twitter:whoToFollow />
            </div>
        </div>
    </div>
</aura:application>
