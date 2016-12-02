import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'jlm-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Blob[] = [];
  videosCache: Map<Blob, [string, SafeResourceUrl]> = new Map<Blob, [string, SafeResourceUrl]>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getUrl(b: Blob) {
    let valeur = this.videosCache.get(b);
    if (valeur !== undefined) {
      return valeur;
    } else if (valeur === undefined) {
      let dangerousUrl: string = window.URL.createObjectURL(b);
      let safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
      this.videosCache.set(b, [dangerousUrl, safeUrl]);
      return [dangerousUrl, safeUrl];
    }

  }

}
