class sumOfSingleChild
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
        let newNode=new sumOfSingleChild(data);
        // console.log(this.root)
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
                        current.right=new sumOfSingleChild(data)
                        break;
                    }
                    current=current.right
                }
            }
        }
        // return this.root;
        
    }

    tot=0;
    SumOfNodesWithSingleChild(curr)
    {
        if(curr==null)
            return ;
        else 
        {
            if((curr.left==null && curr.right!=null) || (curr.left!=null && curr.right==null))
                this.tot+=curr.data;
            this.SumOfNodesWithSingleChild(curr.left);
            this.SumOfNodesWithSingleChild(curr.right);
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
var obj=new sumOfSingleChild(1);
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

document.getElementById("SumOfSingleChildNodesbtn").addEventListener("click",function(e){
    obj.SumOfNodesWithSingleChild(obj.root);
    console.log(obj.tot)
})
