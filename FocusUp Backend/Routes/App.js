const express = require('express');
const {Router}=express;

const {db}=require('../ServiceAccount');

const router=Router();

router.get('/getfocusgroups',(req,res)=>{
    db.collection('focus_groups').get().then(data=>{
        res.json(data.docs.map(data=>{
           return {
               'id': data.id,
               'name' : data.data()["focus_group_name"]
           } 
        }));
    })
})

router.post('/createpost',(req,res)=>{
    db.collection('Posts').add({
        focusGroupID : req.body.focusGroupID,
        description: req.body.description,
        media: req.body.urls,
        comments : []
    }).then(()=>{
        res.json("Post has been added");
    }).catch((err)=>{
        res.json("Post could not be added");
        res.json(err);
    })
})

router.get('/getpost/:focusgroupid',(req,res)=>{
    db.collection('Posts').where('focusGroupID','==',req.params.focusgroupid).get().then(docData=>{
        res.json(docData.docs.map(data=>{
            return {
                'id' : data.id,
                'description': data.data()['description'],
                'media': data.data()['media'],
                'comments': data.data()['comments']
            }
        }))
    })
})

router.post('/createcomment/:postid',(req,res)=>{
    db.collection('Posts').doc(req.params.postid).get().then(doc=>{
        let comments=doc.data()['comments']
        if (req.body.comment!="")
        {
            comments.push(req.body.comment);
        }
        db.collection('Posts').doc(req.params.postid).update({
            'comments': comments
        }).then(()=>{
            res.json('Comments have been updated');
        }).catch(err=>{
            res.json('Comments could not be added');
            res.json(err);
        })
    }).catch(err=>{
        res.json(err);
    })
})

router.post('/sendchat/:focusgroupid',(req,res)=>{
    db.collection('focus_groups').doc(req.params.focusgroupid).get().then((doc)=>{
        let chats=doc.data()["chat"]
        if (req.body.chat!="")
        {
            chats.push(req.body.chat);
        }
        db.collection('focus_groups').doc(req.params.focusgroupid).update({
            'chat' : chats
        }).then(()=>{
            res.json("Chat has been updated");
        }).catch(err=>{
            res.json("Chat could not be added");
            res.json(err);
        })
    }).catch(err=>{
        res.json(err);
    })
})

router.get('/getchat/:focusgroupid',(req,res)=>{
    db.collection('focus_groups').doc(req.params.focusgroupid).get().then((doc)=>{
        res.json(doc.data()["chat"])
    })
})

router.get('/getcomments/:postid',(req,res)=>{
    db.collection('Posts').doc(req.params.postid).get().then(doc=>{
        res.json(doc.data()["comments"]);
    })
})

exports.router=router;