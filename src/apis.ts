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

declare class SpotubeFormType {
  static show(title: string, fields: SpotubeFormField[]): Promise<any>;
}

interface LocalStorageType {
  getItem(key: string): string | null | undefined;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
};

declare class TimezoneType {
  static getLocalTimezone(): Promise<string>;

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

declare class WebViewType {
  static create(uri: string): Promise<WebViewType>;
  
  onUrlChange(callback: (url: string) => void): void;
  open(): Promise<void>;
  close(): Promise<void>;
  cookies(url: string): Promise<Cookie[]>;
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

declare class YouTubeEngineType {
  search(query: string): Promise<YouTubeSearchResponseVideo[]>;
  video(videoId: string): Promise<YouTubeSearchResponseVideo>;
  streamManifest(videoId: string): Promise<YouTubeStreamManifestResponse[]>;
}

export const WebView = (globalThis as any).WebView as typeof WebViewType;
export const SpotubeForm = (globalThis as any).SpotubeForm as typeof SpotubeFormType;
export const Timezone = (globalThis as any).Timezone as typeof TimezoneType;
export const YouTubeEngine = (globalThis as any).YouTubeEngine as typeof YouTubeEngineType;
export const localStorage = (globalThis as any).localStorage as LocalStorageType;