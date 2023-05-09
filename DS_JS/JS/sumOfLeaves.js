class sumOfLeaves 
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
        let newNode=new sumOfLeaves (data);
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
                        current.right=new sumOfLeaves (data)
                        break;
                    }
                    current=current.right
                }
            }
        }
        
    }

    sumOfleaves(root)
    {
        if(root==null)
            return 0;
        else 
        {
            if(root.left==null && root.right==null)
            {
                this.sum+=root.data;
            }
            obj.sumOfleaves(root.left)
            obj.sumOfleaves(root.right);
        }
    }

    preorder(root)
    {
        if(root==null)
        return 
        this.preorder(root.left);
        console.log(root.data);
        this.preorder(root.right)
        
    }
    
}
var obj=new sumOfLeaves ();
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

document.getElementById("sumOfLeavesBtn").addEventListener("click",function(e){
    console.log("The sum of leaf nodes is : ")
    obj.sumOfleaves(obj.root);
    console.log(obj.sum)
})