'''
Author: yating.wang
Date: 2022-11-30 21:32:11
LastEditors: yating.wang
LastEditTime: 2022-12-01 14:50:15
Description: ape+cue->m4a
'''
import os

def countTime(start, end=None):
  if not end:
    return '00:07:00'
  duration = str2sec(end) - str2sec(start)
  return sec2str(duration)

def str2sec(str):
  arr = str.split(':')
  return int(arr[0])*3600+int(arr[1])*60+float(arr[2])

def sec2str(time):
  hour =  '%02d' % (time/3600)
  min = '%02d' % (time/60)
  sec = str(round(time%60,2))
  return hour+':'+min+':'+sec


path = "/Users/artemis/Desktop/苏打绿1"
new_path = "/Users/artemis/Desktop/new"
file_all = os.listdir(path)
for i in file_all:
  old_path = path+os.sep+i
  if os.path.isdir(old_path):
    if not os.path.exists(new_path+os.sep+i):
      os.mkdir(new_path+os.sep+i)
    file_all1 = os.listdir(old_path)
    # 判断是否存在m4a
    hasM4a = False
    for old_file_item in file_all1:
      if old_file_item.endswith('m4a') or old_file_item.endswith('M4A'):
        hasM4a=True
      if old_file_item.endswith('cue'):
        cue_fileName = old_file_item
    if not hasM4a:
      for old_file_item in file_all1:
        if old_file_item.endswith('flac') or old_file_item.endswith('wav') or old_file_item.endswith('ape'):
          ape_path = old_path+os.sep+old_file_item
          m4a_path = ape_path.replace('.flac','.m4a').replace('.ape','.m4a').replace('.wav','.m4a')
          os.system("ffmpeg -i '"+ape_path+"' '"+m4a_path+"'")
    old_m4a_fileName = cue_fileName.replace('.cue','.m4a')
    print(cue_fileName)
    # 处理cue文件，有的需要 gbk 解析，有的需要 utf-8 解析，有的需要 unicode-escape 解析
    cue_f = open(old_path+os.sep+cue_fileName,'r',encoding="unicode-escape")
    start_time = []
    title = []
    flag = False
    for line in cue_f:
      if 'WAVE' in line:
        flag=True
      if flag:
        if 'TITLE' in line:
          song_name = line.split('"')[1]
          title.append(song_name)
        if 'INDEX 01' in line:
          arr = line.replace('INDEX 01','').strip().split(':')
          start_time.append('00:'+arr[0]+':'+arr[1]+'.'+arr[2])
    # 开始截取歌
    for index,sont_title in enumerate(title):   
      new_song_path = new_path+os.sep+i+os.sep+sont_title+'.m4a'
      old_song_path = old_path+os.sep+old_m4a_fileName
      if index+1>=len(start_time):
        print('ffmpeg -i "'+old_song_path+'" -ss '+start_time[index]+' -t '+countTime(start_time[index])+' -acodec copy "'+new_song_path+'"')
        os.system('ffmpeg -i "'+old_song_path+'" -ss '+start_time[index]+' -t '+countTime(start_time[index])+' -acodec copy "'+new_song_path+'"')
      else:
        print('ffmpeg -i "'+old_song_path+'" -ss '+start_time[index]+' -t '+countTime(start_time[index],start_time[index+1])+' -acodec copy "'+new_song_path+'"')
        os.system('ffmpeg -i "'+old_song_path+'" -ss '+start_time[index]+' -t '+countTime(start_time[index],start_time[index+1])+' -acodec copy "'+new_song_path+'"')
        
      


 

    
    


    
