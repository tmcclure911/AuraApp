<aura:application>
    <!--<link rel="stylesheet" href="/css/bootstrap-3.3.6-dist/css/bootstrap.css"/>-->
    <div aura:id="homepage">
        <div class="page">
            <twitter:navBar/>
            <div class="container">
                <routing:SimpleRoutedPath route="home|^$" component="twitter:home" />
                <routing:SimpleRoutedPath route="profile" component="twitter:profile" />

                
            </div>
        </div>
    </div>
</aura:application>
