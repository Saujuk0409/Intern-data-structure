class LinkedList {
    head = null;
    length = 0;
    constructor(data) {
        this.data = data;
       this.next = null;
    }
    insert(data) {
    let node = new LinkedList(data);
        if (this.head === null) 
        {
           this.head = node;
            return this.head;
        }
    let currNode = this.head;
    while (currNode.next != null) 
    {
        console.log(currNode.data);
        currNode = currNode.next;
    }
     currNode.next = node;
     //return node;
    }

    remove(data) 
    {
        if(data==null)
            return null;
        let currNode = this.head;
        let prev=this.head;
        currNode=currNode.next;
        while(currNode.data!=data)
        {
            currNode=currNode.next;
            prev=prev.next;
        }
        prev.next=currNode.next;
        currNode.next=null;                                                           
        return currNode;
    }

    display() 
    {
        let currNode = this.head;
        console.log("The nodes are: ")
        while (currNode != null) 
        {
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }

    }

var obj=new LinkedList(1);
document.getElementById("insert").addEventListener("click", function(e)
 {
    
    var input = document.getElementById("Create").value;
    input=input.split(" ")
    for(let i=0;i<input.length;i++)
    {
        obj.insert(input[i]);
    }
    obj.display();
  }
);
document.getElementById("removeBtn").addEventListener("click", function(e)
 {
    
    var input = document.getElementById("remove").value;
    console.log("The elements before removing: ")
    obj.display();
    obj.remove(input);
    obj.display();
    
  }
);