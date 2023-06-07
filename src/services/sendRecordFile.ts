import axios from 'axios';
import {SERVER_URL} from '../data/serverData';
import * as FileSystem from 'expo-file-system';
import {Buffer} from 'buffer';

class sendRecordFile {
  //S3 링크 받아오기
  async GetS3URL(filename: string) {
    try {
      const response = await axios.get(
        `${SERVER_URL}/recording/upload-url?filename=${filename}`,
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //S3에 파일 전송하기
  async SendFileS3(s3url: string, file: string) {
    const buffer = Buffer.from(file, 'base64'); //base64로 바꾼 파일을 buffer 로 저장
    return fetch(s3url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'audio/wav; charset=utf-8',
      },
      body: buffer,
    });
  }
}
export default new sendRecordFile();
