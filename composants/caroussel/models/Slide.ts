/** Slide type */
export interface SlideI{
    id?:string | number;
    title:string;
    subtitle?:string;
    description?:string;
    media:MediaI;
    type:Types;
}
/** Media type */
export interface MediaI{
    id?:string | number;
    name:string;
    description?:string;
    url:string;
    legende?:string;
}
/** Slides types enum */
enum Types{
    image = 'image',
    jpg = 'image',
    png = 'image',
    webp = 'image',
    video = 'video',
    mp4 = 'video',
    webm = 'video',
    audio = 'audio',
    aac = 'audio',
    mp3 = 'audio',
    text = 'text',
    pdf = 'text'
}