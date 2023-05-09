class Trees
{
    root=null;
    sum=0;
    data=0;
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }

    addNode(data)
    {
        let newNode=new Trees(data);
        if(this.root==null)
        {
            this.root=newNode;
        }
        else{
            let current = this.root;
            while(true)
             {
                if(data<=current.data)
                {
                    if(current.left==null)
                    {
                        current.left=newNode
                         break;
                    }
                    current=current.left
                }
                else
                {

                    if(current.right==null)
                    {
                        current.right=new Trees(data)
                        break;
                    }
                    current=current.right
                }
            }
        }
        
    }

    Inorder(root)
    {
        if(root==null)
        return 
        this.Inorder(root.left);
        console.log(root.data);
        this.Inorder(root.right)
        
    }
    preorder(root)
    {
        if(root==null)
        return 
        console.log(root.data);
        this.preorder(root.left);
        this.preorder(root.right)
    }
    postorder(root)
    {
        if(root==null)
        return 
        this.postorder(root.left);
        this.postorder(root.right)
        console.log(root.data);
    }
    
}
var obj=new Trees(1);
document.getElementById("insert").addEventListener("click", function(e)
 {
    var input = document.getElementById("Create").value;
    input=input.split(" ")
    console.log(input)
    for(let i=0;i<input.length;i++)
    {
        obj.addNode(parseInt(input[i]));
    }
    obj.preorder(obj.root);
    
  }
);

document.getElementById("preorder").addEventListener("click",function(e){
    console.log("preorder Order Traversal:")
    obj.preorder(obj.root);
    console.log(obj.sum)
})
document.getElementById("postorder").addEventListener("click",function(e){
    console.log("postorder Order Traversal:")
    obj.postorder(obj.root);
    console.log(obj.sum)
})
document.getElementById("InOrder").addEventListener("click",function(e){
    console.log("Inorder Order Traversal:")
    obj.Inorder(obj.root);
    console.log(obj.sum)
})