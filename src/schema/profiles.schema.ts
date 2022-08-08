import mongoose from '../connection/default';

const { Schema, model } = mongoose;

export interface IProfileUrlInfo{
  raw : string;
  profileVar : string
}

const urlCandidateInfo = new Schema<IProfileUrlInfo>({
  raw       : { type: String, required: true },
  profileVar: { type: String, required: true }
});


export default model('UrlsProfile', urlCandidateInfo);