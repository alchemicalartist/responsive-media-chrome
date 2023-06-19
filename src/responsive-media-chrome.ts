import { MediaThemeElement } from "media-chrome/dist/media-theme-element.js";

const template = document.createElement("template");
template.innerHTML = `
    <template id="multi-theme">
        <link rel="stylesheet" href="style.css" type="text/css">
        <style>
            .spacer {
                flex-grow: 1;
                background-color: var(--media-control-background,rgba(20, 20, 30, 0.7));
            }
            :root {
                --media-primary-color: #f138e5;
                --media-font-family: "chris_handwritingregular";
            }
            .width-controls {
                padding-block: 1rem;
            }
            .width-controls label {
                padding-inline: 0.5rem 1rem;
            }
            .center {
                display: none;
            }
            #res-final {
                display: block;
                aspect-ratio: 16 / 9;
                container: media-chrome / inline-size;
            }
            #res-final video {
                width: 100%;
            }
            /* small player size */
            @container (inline-size < 420px) {
                #res-final .center {
                    display: block;
                }
                #res-final media-control-bar {
                    display: none;
                }
            }
            /* medium player size */
            @container (420px <= inline-size <= 590px) {
                #res-final .center {
                    display: block;
                }
                #res-final media-control-bar {
                    display: flex;
                }
                #res-final media-control-bar media-play-button,
                #res-final media-control-bar media-seek-backward-button,
                #res-final media-control-bar media-seek-forward-button {
                    display: none;
                }
            }
            /* large (default) player size */
            @container (inline-size > 590px) {
                #res-final .center {
                    display: none;
                }
                #res-final media-control-bar {
                    display: flex;
                }
            }
            [data-icon] {
                height: 24px;
            }
            media-play-button:not([mediapaused]) .play-pause span:first-child,
            media-play-button[mediapaused] .play-pause span:last-child {
                display: none;
            }
            media-volume-range {
                --media-primary-color: #f138e5;
            }
        </style>
        <template partial="seek-backward">
            <media-seek-backward-button seekoffset="15">
                <span slot="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 240 240">
                        <path fill="#f138e5" d="M240 117v-5a131 131 0 0 0-18-58 118 118 0 0 0-43-42 99 99 0 0 0-55-12 118 118 0 0 0-82 47 119 119 0 0 0-20 49C17 75 7 53 3 56c-10 7 6 83 19 74l1-1c13-3 42-29 37-39-4-9-22 6-33 20a555 555 0 0 0 4-17l4-15 10-18-3 5h-1l1-2 3-6a94 94 0 0 1 23-25l20-12 24-9a89 89 0 0 1 66 11l6 3 6 5a119 119 0 0 1 41 110 123 123 0 0 1-40 73c-3 4-7 6-11 9l-6 3-3 1a560 560 0 0 0-18 7 114 114 0 0 1 15-5c4-2 2-1 0 1l-5 2-5 2-9 1-3 1-4 1-8 1-3-1h-10l-8-1h-3l-2-1-2-1h-3l-3-1-3-2-3-1-8-3-7-4c-5-2-9-6-13-9a237 237 0 0 0 16 12l2 1a73 73 0 0 1-11-6l-3-3-3-2-1-2-2-1-1-1 2 2 2 2 3 3 1 1c12 10 27 16 41 19h4l3 1h3l4 1h2v-1h-2 2a44 44 0 0 0 6 1h-7 15l3-1 5-1h4l2-1h1l2-1h2l2-1 3-1 3-1 2-1 2-1-2 1-3 2c6-3 13-6 20-11a116 116 0 0 0 49-74l2-9 1-9v-15Z" data-name="seekReverse"/>
                    </svg>
                </span>
            </media-seek-backward-button>
        </template>
        <template partial="play-button">
            <media-play-button>
                <span slot="play">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 205 240">
                        <path fill="#f138e5" d="M15 121C15 1-39-32 96 32c111 52 152 89 52 145-215 120-133 50-133-56Z" data-name="play"/>
                    </svg>
                </span>
                <span slot="pause">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 135 240">
                        <path fill="#f138e5" d="M32 0c46 0 31 240-8 240C-2 240-17 0 32 0Zm85 0C78-1 51 238 97 240c49 2 45-238 20-240Z" data-name="pause"/>
                    </svg>
                </span>
            </media-play-button>
        </template>
        <template partial="seek-forward">
            <media-seek-forward-button seekoffset="15">
                <span slot="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 240 240">
                        <path fill="#f138e5" d="M237 56c-4-3-14 19-19 40a131 131 0 0 0-20-49 118 118 0 0 0-45-37 105 105 0 0 0-74-5 100 100 0 0 0-34 18c-11 9-20 19-27 31a129 129 0 0 0-18 58v19l1 9 2 9a122 122 0 0 0 49 74c7 5 14 8 20 11l-3-2-2-2a79 79 0 0 0 4 3l3 1 3 1 2 1h2l2 1h1l2 1h4l5 1 3 1h15-7a181 181 0 0 1 6-1h2-2v1h2l4-1h3l3-1h4c14-3 29-9 41-19l1-1 3-3 2-2 2-2-1 1-2 1-1 2-3 2-3 3a80 80 0 0 1-11 6l2-1a237 237 0 0 0 16-12c-4 3-8 7-13 9l-7 4-8 3-3 1-3 2-3 1h-3l-2 1-2 1h-3l-8 1h-10l-3 1-8-1-4-1-3-1-9-1-5-2-5-2c-2-2-4-3 0-1a94 94 0 0 0-1-1l-2-1-3-1-6-3-12-8a123 123 0 0 1 2-184l6-5 6-3 12-6c17-7 36-8 54-5l24 9 20 12a93 93 0 0 1 23 25l3 6 1 2h-1l-3-5 10 18 5 15a388 388 0 0 1 3 17c-11-14-29-29-33-20-5 10 24 36 37 39l1 1c13 9 29-67 19-74Z" data-name="seekForward"/>
                    </svg>
                </span>
            </media-seek-forward-button>
        </template>
        <template partial="mute-button">
            <media-mute-button>
                <span slot="high">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 211 240">
                        <path fill="#f138e5" d="M159 119c0 95 35 136-19 116-14-5-64-58-95-59-85-4-24-21-23-49 0-19-33-44 14-44 53 0 86-68 107-77 66-26 16 33 16 113Zm37 89c-18-72 9-121 4-173-2-22-47 136-4 173Zm11-31c3 6 5-110 4-106-10 34-11 90-4 106Z" data-name="high"/>
                    </svg>
                </span>
                <span slot="medium">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 211 240">
                        <path fill="#f138e5" d="M159 119c0 95 35 136-19 116-14-5-64-58-95-59-85-4-24-21-23-49 0-19-33-44 14-44 53 0 86-68 107-77 66-26 16 33 16 113Zm37 89c-18-72 9-121 4-173-2-22-47 136-4 173Zm11-31c3 6 5-110 4-106-10 34-11 90-4 106Z" data-name="high"/>
                    </svg>
                </span>
                <span slot="low">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 190 240">
                        <path fill="#f138e5" d="M157 119c0 95 33 136-19 116-14-5-63-58-93-59-84-4-24-21-24-49 0-19-32-44 14-44 53 0 85-68 106-77 65-26 16 33 16 113Zm28 89c-17-72 9-121 4-173-1-22-45 136-4 173Z" data-name="low"/>
                    </svg>
                </span>
                <span slot="off">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 240 240">
                        <path fill="#f138e5" d="M161 119c0 95 34 136-20 116-14-5-64-58-95-59-86-4-24-21-24-49 0-19-33-44 14-44 54 0 87-68 109-77 66-26 16 33 16 113Zm76-37c-6-5-17 4-29 17-8-16-17-26-24-23-9 4-4 25 6 47-13 19-22 39-18 42 5 4 18-5 31-18 9 16 18 28 22 26 7-3 4-25-4-47 14-19 24-39 16-44Z" data-name="muted"/>
                    </svg>
                </span>
            </media-mute-button>
        </template>
        <template partial="full-screen">
            <media-fullscreen-button>
                <span slot="enter">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 240 240">
                        <path fill="#f138e5" d="M17 236h-3c-28 0-9-102 14-102 11 0 14 55 3 85 30-7 78-11 80 4 2 16-69 21-94 13Zm209-105c-17 0-18 53-12 82-29-4-86 8-85 16 1 14 73 14 95 2l2-1c3-2 5-4 5-7 12-23 14-92-5-92ZM12 8c-17 8-16 107 5 106 17-1 14-54 7-85 29 8 86 0 85-10C107 1 30-7 12 8Zm217 2C214-7 123-2 128 21c4 18 50 14 79 6-8 31-2 89 9 88 22-1 33-92 13-105Z" data-name="fullScreenEnter"/>
                    </svg>
                </span>
                <span slot="exit">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 240 240">
                        <path fill="#f138e5" d="M140 102h-3c-28 0-9-102 14-102 11 0 14 55 3 84 30-7 78-10 79 5 2 16-68 21-93 13ZM97 0C80 0 80 53 85 82 56 78-1 89 0 98c2 14 73 14 95 2l2-1c3-2 5-4 5-7 12-24 14-92-5-92Zm46 131c-16 8-16 107 5 106 17-1 15-54 8-85 28 8 85 0 84-10-2-18-78-26-97-11Zm-42 3C86 118-5 123 1 146c3 17 49 14 79 6-9 31-3 88 8 88 22-1 33-92 13-106Z" data-name="fullScreenExit"/>
                    </svg>
                </span>
            </media-fullscreen-button>
        </template>
        <template partial="pip-button">
            <media-pip-button>
                <span slot="enter">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 240 135">
                        <path fill="#f138e5" d="M224 4C199 4 38-5 9 4c-17 6-7 117 0 126 9 11 197 0 215 0S249 4 224 4Zm-14 118c-15 0-179 9-186 0-6-8-14-105 0-109 25-8 164 0 186 0s15 109 0 109Zm-2-47c-7 0-55-3-64 0-5 2-2 37 0 40 3 4 59 0 64 0s8-40 0-40Z" data-name="miniPlayer"/>
                    </svg>
                </span>
                <span slot="exit">
                    <svg xmlns="http://www.w3.org/2000/svg" data-icon viewBox="0 0 240 240">
                        <path fill="#f138e5" d="M140 102h-3c-28 0-9-102 14-102 11 0 14 55 3 84 30-7 78-10 79 5 2 16-68 21-93 13ZM97 0C80 0 80 53 85 82 56 78-1 89 0 98c2 14 73 14 95 2l2-1c3-2 5-4 5-7 12-24 14-92-5-92Zm46 131c-16 8-16 107 5 106 17-1 15-54 8-85 28 8 85 0 84-10-2-18-78-26-97-11Zm-42 3C86 118-5 123 1 146c3 17 49 14 79 6-9 31-3 88 8 88 22-1 33-92 13-106Z" data-name="fullScreenExit"/>
                    </svg>
                </span>
            </media-pip-button>
        </template>
        <media-controller audio="{{audio}}">
            <slot name="media" slot="media"></slot>
            <slot name="poster" slot="poster"></slot>
            <template if="audio">
                <media-control-bar>
                    {{>play-button}}
                    <media-time-display showduration></media-time-display>
                    <media-time-range></media-time-range>
                    {{>fullscreen-button}}
                    {{>mute-button}}
                    <media-volume-range></media-volume-range>
                </media-control-bar>
            </template>
            <template if="audio == null">
                <template if="streamtype == 'on-demand'">
                    <media-control-bar class="center">
                        {{>seek-backward}}
                        {{>play-button}}
                        {{>seek-forward}}
                    </media-control-bar>
                    <media-control-bar class="bottom">
                        {{>play-button}}
                        {{>seek-backward}}
                        {{>seek-forward}}
                        {{>mute-button}}
                        <media-volume-range></media-volume-range>
                        <media-time-range></media-time-range>
                        <media-time-display></media-time-display>
                        {{>full-screen}}
                        {{>pip-button}}
                    </media-control-bar>
                </template>
            </template>
        </media-controller>
    </template>
    <script>
      import 'media-chrome';
    </script>
`;

class MediaThemeResponsive extends MediaThemeElement {
  static template = template;
}

if (!globalThis.customElements.get("media-theme-responsive")) {
  globalThis.customElements.define(
    "media-theme-responsive",
    MediaThemeResponsive
  );
}

export default MediaThemeResponsive;
