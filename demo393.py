'''
Author: artemis
Date: 2022-11-13 19:19:14
LastEditTime: 2022-12-05 18:22:19
LastEditors: artemis
Description: python脚本处理音乐格式 m4a -> mp3
'''
import os

path = "/Users/artemis/Desktop/潘玮柏"
new_path = "/Users/artemis/Desktop/new"
file_all = os.listdir(path)
for i in file_all:
  old_path = path+os.sep+i
  if os.path.isdir(old_path):
    if not os.path.exists(new_path+os.sep+i):
      os.mkdir(new_path+os.sep+i)
    file_all1 = os.listdir(old_path)
    for j in file_all1:
      if j.endswith('flac') or j.endswith('wav'):
        full_old_path = old_path+os.sep+j
        full_old_path = full_old_path
        new_file_path = new_path+os.sep+i+os.sep+j.replace('.wav','.m4a').replace('.flac','.m4a')
        os.system("ffmpeg -i '"+full_old_path+"'  -map 0:0 '"+new_file_path+"'")
        # print("ffmpeg -i '"+full_old_path+"'  -map 0:0 '"+new_file_path+"'")


