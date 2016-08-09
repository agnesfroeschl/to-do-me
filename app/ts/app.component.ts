import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "AngularJS 2", "r1LrtmRYEr4", "Tutorial for AngularJS 2"),
            new Video(1, "Angular 2", "_-CD_5YhJTA", "Learn Angular 2 from Scratch")
        ]
    }
}
