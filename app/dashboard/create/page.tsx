import { handleSubmission } from "@/app/action";
import { Card ,CardHeader,CardTitle,CardDescription,CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/general/SubmitButton";
export default async function CreateBlogRoute(){
    return (
        <div>
           <Card className="max-w-lg mx-auto mt-5">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-medium">Create a new Post</CardTitle>
                <CardDescription>Create a new Post to share to your loved ones</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={handleSubmission} className="flex flex-col gap-4 text-center">
                    <div className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <Input type="text" name = "title" placeholder="Title" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Content</Label>
                        <Textarea name = "content" placeholder="Content" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Image URL</Label>
                        <Input name = "url"  placeholder="Image URL" required/>
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
           </Card>
        </div>
    )
}