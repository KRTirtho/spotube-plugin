export interface SpotubeFormInputField {
  objectType: "input";
  id: string;
  variant: "text" | "password" | "number";
  placeholder: string | null;
  defaultValue: string | null;
  required: boolean;
  regex: string | null;
}

export interface SpotubeFormTextField {
  objectType: "text";
  text: string;
}

export type SpotubeFormField = SpotubeFormInputField | SpotubeFormTextField;

export declare class SpotubeForm {
  static show(title: string, fields: SpotubeFormField[]): Promise<any>;
}

export declare const localStorage: {
  getItem(key: string): string | null | undefined;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
};

export declare class Timezone {
  static getLocalTimeZone(): Promise<string>;

  static getAvailableTimezones(): Promise<string[]>;
}

export interface Cookie {
  readonly domain: string;
  readonly expiresDate: number;
  readonly isHttpOnly: boolean;
  readonly isSecure: boolean;
  readonly isSessionOnly: boolean;
  readonly name: string;
  readonly path: string;
  readonly value: string;
}

export declare class Webview {
  static create(uri: string): Promise<Webview>;

  onUrlRequestStream(callback: () => void): void;
  open(): Promise<void>;
  close(): Promise<void>;
  getCookies(url: string): Promise<Cookie[]>;
}

export interface YouTubeSearchResponseVideo {
  id: string;
  title: string;
  author: string;
  duration?: number | null;
  description?: string | null;
  uploadDate?: string | null;
  viewCount: number;
  likeCount?: number | null;
  isLive?: boolean;
}

export interface YouTubeStreamManifestResponse {
  url: string;
  quality: string;
  bitrate: number;
  container: string;
  videoId: string;
}

export declare class YouTubeEngine {
  search(query: string): Promise<YouTubeSearchResponseVideo[]>;
  video(videoId: string): Promise<YouTubeSearchResponseVideo>;
  streamManifest(videoId: string): Promise<YouTubeStreamManifestResponse[]>;
}
