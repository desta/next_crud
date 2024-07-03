"use client"
import React, { useState } from 'react'
import prisma from '@/lib/Prisma'



export default async function page() {
  const posts = await prisma.wishlist.findMany()
  const [index, setIndex] = useState(0);
  var items1 = () => {
    setIndex(0)
  };
  var items2 = () => {
    setIndex(2)
  };
  var items3 = () => {
    setIndex(3)
  };
  return (
    <>
      <h1 className='font-bold'>Tampilkan semua</h1>
      <div className="flex w-full overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post,index) => (
              <tr>
                <td>{post.title}</td>
                <td>{post.link}</td>         
              </tr>           
            ))}
          </tbody>
        </table>
      </div>
      <div className="divider"></div>
      <h1 className='font-bold'>Tampilkan 1</h1>
      <div className="flex w-full overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {/* {posts.map((post,index) => ( */}
              <tr>
                <td>{posts[0].title}</td>
                <td>{posts[0].link}</td>         
              </tr>           
            {/* ))} */}
          </tbody>
        </table>
      </div>
      <div className="divider"></div>
      <h1 className='font-bold'>Tampilkan berdasarkan jumlah ditampilkan</h1>
        <input className="btn btn-primary" id='ini1' onClick={() => items1()}>Tampilkan 1</input>
        <input className="btn btn-primary" id='ini2' onClick={() => items2()}>Tampilkan 2</input>
        <input className="btn btn-primary" id='ini3' onClick={() => items3()}>Tampilkan 3</input>
      <div className="flex w-full overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
              {/* {posts.map((post,[index]) => ( */}
              <tr>
                <td>{posts[index].title}</td>
                <td>{posts[index].link}</td>      
              </tr>           
            {/* ))}        */}
          </tbody>
        </table>
      </div>
    </>
  )
}